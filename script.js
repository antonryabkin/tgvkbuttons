document.querySelector('.tg-button').addEventListener('click', function(e) {

  e.preventDefault();

  document.querySelector('a.tg-login-advanced').trigger

    ? $(document.querySelector('a.tg-login-advanced')).trigger('click')

    : document.querySelector('a.tg-login-advanced').click();

});

document.querySelector('.vk-button').addEventListener('click', function(e) {

  e.preventDefault();

  document.querySelector('.btn-login[data-provider="vk"]').trigger

    ? $(document.querySelector('.btn-login[data-provider="vk"]')).trigger('click')

    : document.querySelector('.btn-login[data-provider="vk"]').click();

});
