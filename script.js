function toggleMode() {
  const html = document.documentElement;

   if (html.classList.contains('light')) {
  html.classList.remove('light');
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
   }

 //html.classList.toggle('light');
}