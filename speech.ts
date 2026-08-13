export function speakText(text: string, lang: 'es' | 'hy') {
  if (!('speechSynthesis' in window)) {
    alert('Web Speech API is not supported in your browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang === 'es' ? 'es-ES' : 'hy-AM';
  utterance.rate = 0.9; // Slightly slower for better learning clarity

  // Try to find a matching voice if available
  const voices = window.speechSynthesis.getVoices();
  const matchedVoice = voices.find((v) =>
    lang === 'es'
      ? v.lang.startsWith('es')
      : v.lang.startsWith('hy') || v.lang.startsWith('arm')
  );

  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  window.speechSynthesis.speak(utterance);
}
