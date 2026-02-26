declare global {
  interface Window {
    ethereum?: any;
    solana?: any;
  }
}

function checkMetaMask(): boolean {
  return typeof window.ethereum !== "undefined";
}

function checkPhantom(): boolean {
  return typeof window.solana !== "undefined" && window.solana.isPhantom;
}

function showMessage(message: string, type: "success" | "error" | "info") {
  const messageEl = document.getElementById("donate-message");
  if (messageEl) {
    messageEl.textContent = message;
    messageEl.className = `donate-message mt-4 px-3 py-3 rounded-lg text-center text-sm`;

    if (type === "success") {
      messageEl.classList.add(
        "bg-green-100",
        "text-green-800",
        "dark:bg-green-900",
        "dark:text-green-200",
      );
    } else if (type === "error") {
      messageEl.classList.add(
        "bg-red-100",
        "text-red-800",
        "dark:bg-red-900",
        "dark:text-red-200",
      );
    } else if (type === "info") {
      messageEl.classList.add(
        "bg-blue-100",
        "text-blue-800",
        "dark:bg-blue-900",
        "dark:text-blue-200",
      );
    }

    setTimeout(() => {
      messageEl.className =
        "donate-message hidden mt-4 px-3 py-3 rounded-lg text-center text-sm";
    }, 5000);
  }
}

async function copyToClipboard(address: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(address);
    return true;
  } catch (err) {
    console.error("复制失败:", err);
    return false;
  }
}

async function handleETCDonate(address: string) {
  if (!checkMetaMask()) {
    const copied = await copyToClipboard(address);
    if (copied) {
      showMessage(
        `地址已复制: ${address.slice(0, 6)}...${address.slice(-4)} - 推荐安装 MetaMask 等 Web3 钱包以便捷转账`,
        "info",
      );
    } else {
      showMessage(
        `捐赠地址: ${address} - 推荐安装 Web3 钱包 (MetaMask 等)`,
        "info",
      );
    }
    return;
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x3d" }],
      });
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x3d",
              chainName: "Ethereum Classic",
              nativeCurrency: {
                name: "Ethereum Classic",
                symbol: "ETC",
                decimals: 18,
              },
              rpcUrls: ["https://etc.rivet.link"],
              blockExplorerUrls: ["https://blockscout.com/etc/mainnet/"],
            },
          ],
        });
      } else {
        throw switchError;
      }
    }

    const transactionParameters = {
      to: address,
      from: window.ethereum.selectedAddress,
      value: "0x0",
    };

    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });

    showMessage("交易已发送！感谢您的捐赠 ❤️", "success");
  } catch (error: any) {
    console.error("ETC donation error:", error);
    if (error.code === 4001) {
      showMessage("您取消了交易", "info");
    } else {
      showMessage(`交易失败: ${error.message}`, "error");
    }
  }
}

async function handleSOLDonate(address: string) {
  if (!checkPhantom()) {
    const copied = await copyToClipboard(address);
    if (copied) {
      showMessage(
        `地址已复制: ${address.slice(0, 6)}...${address.slice(-4)} - 推荐安装 Phantom 等 Web3 钱包以便捷转账`,
        "info",
      );
    } else {
      showMessage(
        `捐赠地址: ${address} - 推荐安装 Web3 钱包 (Phantom 等)`,
        "info",
      );
    }
    return;
  }

  try {
    const resp = await window.solana.connect();
    showMessage("已连接钱包，请在 Phantom 中确认转账", "info");

    const solanaExplorerUrl = `https://phantom.app/ul/browse/https://phantom.app/ul/v1/send?recipient=${address}`;
    window.open(solanaExplorerUrl, "_blank");
  } catch (error: any) {
    console.error("SOL donation error:", error);
    if (error.code === 4001) {
      showMessage("您取消了连接", "info");
    } else {
      showMessage(`连接失败: ${error.message}`, "error");
    }
  }
}

export function initDonate() {
  const donateButtons = document.querySelectorAll(".donate-button-base");

  donateButtons.forEach((button) => {
    button.addEventListener("click", async (e) => {
      const target = e.currentTarget as HTMLElement;
      const address = target.dataset.address;
      const chain = target.dataset.chain;

      if (!address) return;

      if (chain === "etc") {
        await handleETCDonate(address);
      } else if (chain === "sol") {
        await handleSOLDonate(address);
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDonate);
} else {
  initDonate();
}
