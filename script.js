const textElements = document.querySelectorAll('.cls-3');

textElements.forEach(el => {
  
  const originalColor = el.style.fill || "";

  el.addEventListener('mouseover', () => {
    el.style.fill = "purple";
    el.style.cursor = "pointer"; 
  });

  el.addEventListener('mouseout', () => {
    el.style.fill = originalColor;
  });
});