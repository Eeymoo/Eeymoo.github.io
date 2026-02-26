export function initGoto() {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get('url') || '';
  const stop = urlParams.get('stop') === 'true';
  const isNew = urlParams.get('isNew') === 'true';

  const urlDisplayContainer = document.getElementById('urlDisplayContainer');
  const urlInputContainer = document.getElementById('urlInputContainer');
  const redirectButtonsContainer = document.getElementById('redirectButtonsContainer');
  const inputButtonsContainer = document.getElementById('inputButtonsContainer');
  const countdownContainer = document.getElementById('countdownContainer');
  const httpWarningContainer = document.getElementById('httpWarningContainer');

  function isHttpProtocol(urlString: string) {
    return /^http:\/\//i.test(urlString);
  }

  if (!url) {
    showInputMode();
  } else {
    showRedirectMode(url, stop, isNew);
  }

  function showInputMode() {
    if (urlDisplayContainer) urlDisplayContainer.classList.add('hidden');
    if (countdownContainer) countdownContainer.classList.add('hidden');
    if (redirectButtonsContainer) redirectButtonsContainer.classList.add('hidden');

    if (urlInputContainer) urlInputContainer.classList.remove('hidden');
    if (inputButtonsContainer) inputButtonsContainer.classList.remove('hidden');

    const urlInput = document.getElementById('urlInput') as HTMLInputElement | null;
    const stopOption = document.getElementById('stopOption') as HTMLInputElement | null;
    const isNewOption = document.getElementById('isNewOption') as HTMLInputElement | null;
    const submitBtn = document.getElementById('submitBtn');
    const copyBtn = document.getElementById('copyBtn');

    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!urlInput) return;
        const inputUrl = urlInput.value.trim();
        if (inputUrl) {
          const params = new URLSearchParams({ url: inputUrl });
          if (stopOption?.checked || isHttpProtocol(inputUrl)) {
            params.set('stop', 'true');
          } else if (isNewOption?.checked) {
            params.append('isNew', 'true');
          }
          window.location.href = `/tool/goto/?${params.toString()}`;
        }
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!urlInput) return;
        const inputUrl = urlInput.value.trim();
        if (inputUrl) {
          const params = new URLSearchParams({ url: inputUrl });
          if (stopOption?.checked || isHttpProtocol(inputUrl)) {
            params.set('stop', 'true');
          } else if (isNewOption?.checked) {
            params.append('isNew', 'true');
          }
          const fullLink = `${window.location.origin}/tool/goto/?${params.toString()}`;

          navigator.clipboard.writeText(fullLink).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '已复制!';
            setTimeout(() => {
              copyBtn.textContent = originalText;
            }, 2000);
          });
        }
      });
    }

    if (urlInput) {
      urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && submitBtn) {
          submitBtn.click();
        }
      });
      urlInput.focus();
    }
  }

  function showRedirectMode(targetUrl: string, shouldStop: boolean, shouldRedirectImmediately: boolean) {
    const urlDisplay = document.getElementById('urlDisplay');
    const redirectLink = document.getElementById('redirectLink');
    const cancelBtn = document.getElementById('cancelBtn');

    if (urlDisplay) {
      urlDisplay.textContent = targetUrl;
    }

    const isHttp = isHttpProtocol(targetUrl);

    if (isHttp) {
      shouldStop = true;
      shouldRedirectImmediately = false;
      if (httpWarningContainer) {
        httpWarningContainer.classList.remove('hidden');
      }
      if (countdownContainer) {
        countdownContainer.classList.add('hidden');
      }
    }

    if (redirectLink) {
      redirectLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.replace(targetUrl);
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cancelBtn.textContent = '已取消';
        cancelBtn.classList.add('pointer-events-none', 'opacity-50');
        if (countdownContainer && !isHttp) {
          countdownContainer.classList.add('hidden');
        }
      });
    }

    if (!isHttp && !shouldStop && !shouldRedirectImmediately) {
      let countdown = 3;
      const countdownEl = document.getElementById('countdown');
      let redirectTimer: number | null = null;

      function startCountdown() {
        redirectTimer = window.setInterval(() => {
          countdown--;
          if (countdownEl) {
            countdownEl.textContent = countdown.toString();
          }

          if (countdown <= 0) {
            if (redirectTimer) clearInterval(redirectTimer);
            window.location.replace(targetUrl);
          }
        }, 1000);
      }

      if (cancelBtn) {
        cancelBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (redirectTimer) clearInterval(redirectTimer);
          cancelBtn.textContent = '已取消';
          cancelBtn.classList.add('pointer-events-none', 'opacity-50');
          if (countdownEl) {
            countdownEl.classList.add('text-slate-400', 'dark:text-slate-500');
            countdownEl.textContent = '已取消';
          }
        });
      }

      startCountdown();
    } else if (!isHttp && shouldRedirectImmediately) {
      window.location.replace(targetUrl);
    } else if (isHttp) {
      // HTTP：已隐藏倒计时，只保留按钮
    } else {
      if (countdownContainer) {
        countdownContainer.style.display = 'none';
      }
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGoto);
} else {
  initGoto();
}
