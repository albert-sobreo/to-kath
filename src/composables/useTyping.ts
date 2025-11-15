import { ref, onMounted, onUnmounted } from "vue";

export function useTyping(text: string, speed = 100, blinkSpeed = 600) {
  const output = ref("");
  const underscoreVisible = ref(true);

  let index = 0;
  let typingInterval: any = null;
  let blinkInterval: any = null;
  let observer: IntersectionObserver | null = null;

  const startTyping = () => {
    if (typingInterval) return;
    typingInterval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(typingInterval);
        return;
      }
      output.value += text[index];
      index++;
    }, speed);
  };

  const startBlinking = () => {
    if (blinkInterval) return;
    blinkInterval = setInterval(() => {
      underscoreVisible.value = !underscoreVisible.value;
    }, blinkSpeed);
  };

  const stopAll = () => {
    clearInterval(typingInterval);
    clearInterval(blinkInterval);
    typingInterval = null;
    blinkInterval = null;
  };

  const observeElement = (el: HTMLElement) => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => startTyping(), 500);
          startBlinking();
        } else {
          stopAll();
        }
      });
    });

    observer.observe(el);
  };

  onUnmounted(() => {
    stopAll();
    if (observer) observer.disconnect();
  });

  return { output, underscoreVisible, observeElement };
}
