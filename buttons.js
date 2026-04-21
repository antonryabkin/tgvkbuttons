document.querySelector('.tn-atom[href*="t.me"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('a.tg-login-advanced').trigger

    ? $(document.querySelector('a.tg-login-advanced')).trigger('click')

    : document.querySelector('a.tg-login-advanced').click();

});

document.querySelector('.tn-atom[href*="vk"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.btn-login[data-provider="vk"]').trigger

    ? $(document.querySelector('.btn-login[data-provider="vk"]')).trigger('click')

    : document.querySelector('.btn-login[data-provider="vk"]').click();

});
