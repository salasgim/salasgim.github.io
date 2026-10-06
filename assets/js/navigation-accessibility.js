// Close the mobile menu after choosing a section on the same page.
const navigation = document.getElementById('site-nav');
if (navigation) {
  navigation.addEventListener('click', function (event) {
    if (!event.target.closest('.hidden-links a')) return;
    navigation.querySelector('.hidden-links').classList.add('hidden');
    navigation.querySelector('button').classList.remove('close');
  });
}
