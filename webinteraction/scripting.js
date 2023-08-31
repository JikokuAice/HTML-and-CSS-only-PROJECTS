

    const curid = document.querySelector('#curid');
    const ul = curid.querySelector('ul');
    const leftButton = curid.querySelector('.arrow1');
    const rightButton = curid.querySelector('.arrow2');

  

    // Add click event listener to the left button
    leftButton.addEventListener('click', () => {
        ul.scrollLeft -= 300;
    });

    // Add click event listener to the right button
    rightButton.addEventListener('click', () => {
        ul.scrollLeft += 300;
    });
