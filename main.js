
var mediaSocial = document.querySelector(".btn2")

mediaSocial.addEventListener('click', function() {
    document.querySelector('.bad-input').style.display = 'block';
    document.querySelector('.bad-input1').style.display = 'block';
    document.querySelector('.bad-input2').style.display = 'block';
    document.querySelector('.bad-input3').style.display = 'block';
    document.querySelector('#hiddenimage-fname').style.display = 'block';
    document.querySelector('#hiddenimage-lname').style.display = 'block';
    document.querySelector('#hiddenimage-email-address').style.display = 'block';
    document.querySelector('#hiddenimage-password').style.display = 'block';
    document.getElementById('fname').placeholder = '';
    document.getElementById('lname').placeholder = '';
    document.getElementById('email-address').placeholder = '@example.com';
    document.getElementById('password').placeholder = '';
});
