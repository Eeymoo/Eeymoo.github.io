export function initDarkModeButton() {
  const storageKey = "theme";
  const toggle = document.getElementById("theme-toggle");
  const root = document.documentElement;
  const autoIcon = document.querySelector(".auto-icon");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const transitionCircle = document.getElementById("theme-transition-circle");

  let isAnimating = false;

  const setIcons = (theme: string) => {
    autoIcon?.classList.toggle("hidden", theme !== "auto");
    sunIcon?.classList.toggle("hidden", theme !== "light");
    moonIcon?.classList.toggle("hidden", theme !== "dark");
  };

  let applyWithTransition = (nextIsDark: boolean, theme: string) => {
    if (!document.startViewTransition) {
      applyWithCircleAnimation(nextIsDark, theme);
      applyWithTransition = applyWithCircleAnimation;
      return;
    }
    applyWithTransition = applyWithViewTransition;
    applyWithViewTransition(nextIsDark, theme);
  };

  // 方案1: View Transition API
  const applyWithViewTransition = (nextIsDark: boolean, theme: string) => {
    // 获取按钮位置，计算像素位置
    const rect = toggle!.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // 设置 CSS 变量用于动画（必须在 startViewTransition 之前设置）
    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    // 使用 View Transition API
    const transition = document.startViewTransition!(() => {
      if (nextIsDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      toggle?.setAttribute("data-theme", theme);
      setIcons(theme);
    });

    transition.ready.then(() => {
      // 检查伪元素是否存在
      const styles = window.getComputedStyle(
        document.documentElement,
        "::view-transition-new(root)"
      );
    });

    transition.finished
      .then(() => {
        isAnimating = false;
      })
      .catch((err) => {
        isAnimating = false;
      });
  };

  // 方案2: 传统圆形展开动画
  const applyWithCircleAnimation = (nextIsDark: boolean, theme: string) => {
    const rect = toggle!.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    let bgColor;
    if (nextIsDark) {
      bgColor = "rgba(26, 26, 26, 1)";
    } else {
      bgColor = "rgba(255, 255, 255, 1)";
    }

    transitionCircle!.style.left = x + "px";
    transitionCircle!.style.top = y + "px";
    transitionCircle!.style.backgroundColor = bgColor;
    transitionCircle!.classList.add("animate");

    setTimeout(() => {
      if (nextIsDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      toggle?.setAttribute("data-theme", theme);
      setIcons(theme);
    }, 500);

    setTimeout(() => {
      transitionCircle!.classList.remove("animate");
      transitionCircle!.style.width = "0";
      transitionCircle!.style.height = "0";
      isAnimating = false;
    }, 1000);
  };

  const applyTheme = (theme: string, animated = false) => {
    const resolved =
      theme === "auto" ? (system.matches ? "dark" : "light") : theme;

    // 获取当前是否为暗色模式
    const currentIsDark = root.classList.contains("dark");
    const nextIsDark = resolved === "dark";

    // 如果颜色没有变化，或者不需要动画，直接切换
    if (!animated || currentIsDark === nextIsDark) {
      if (nextIsDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      toggle?.setAttribute("data-theme", theme);
      setIcons(theme);
      isAnimating = false;
      return;
    }
    applyWithTransition(nextIsDark, theme);
  };

  const loadTheme = (): string => {
    const saved = localStorage.getItem(storageKey);
    return saved === "light" || saved === "dark" ? saved : "auto";
  };

  const cycleTheme = (theme: string): string => {
    if (theme === "auto") return "light";
    if (theme === "light") return "dark";
    return "auto";
  };

  const init = () => {
    applyTheme(loadTheme(), false);
    system.addEventListener("change", () => {
      if (loadTheme() === "auto") applyTheme("auto", true);
    });
    toggle?.addEventListener("click", () => {
      if (isAnimating) return;
      isAnimating = true;

      const next = cycleTheme(
        toggle!.getAttribute("data-theme") || loadTheme()
      );
      localStorage.setItem(storageKey, next);
      applyTheme(next, true);
    });
  };

  init();
}
