

const btnCreatePost = document.querySelectorAll(".btn-create-post")[0];
const btnWithPopover = document.querySelectorAll(".btn-with-popover")[0];
const btnPopoverPositioning = document.querySelectorAll(".btn-popover-positioning")[0];
const btnHtmlInPopovers = document.querySelectorAll(".btn-html-in-popovers")[0];
const btnDisableCloseOnOutsideClick = document.querySelectorAll(".btn-disable-close-on-outside-click")[0];
const btnCreatingFeatureIntroductions = document.querySelectorAll(".btn-creating-feature-introductions")[0];
const btnWithoutOverlay = document.querySelectorAll(".btn-without-overlay")[0];

const driver = new Driver();



btnCreatePost.addEventListener("click", e => {
    driver.highlight('#create-post');
});

btnWithPopover.addEventListener("click", e => {
    driver.highlight({
        element: '#with-popover',
        popover: {
            title: 'Title for the Popover',
            description: 'Description for it',
        }
    });
});


// popover-positioning
// html-in-popovers
// disable-close-on-outside-click
// creating-feature-introductions
// without-overlay
btnPopoverPositioning.addEventListener("click", e => {
    const driver = new Driver();
    driver.highlight({
        element: '#popover-positioning',
        popover: {
            title: 'Title for the Popover',
            description: 'Description for it',
            // position can be left, left-center, left-bottom, top,
            // top-center, top-right, right, right-center, right-bottom,
            // bottom, bottom-center, bottom-right, mid-center
            position: 'top',
        }
    });
});

btnHtmlInPopovers.addEventListener("click", e => {
    driver.highlight({
        element: '#html-in-popovers',
        popover: {
            title: '<em>An italicized title</em>',
            description: 'Description may also contain <strong>HTML</strong>'
        }
    });
});

btnDisableCloseOnOutsideClick.addEventListener("click", e => {
    const driver = new Driver({
        allowClose: false,
    });
    driver.highlight({
        element: '#disable-close-on-outside-click',
        popover: {
            title: '<em>An italicized title</em>',
            description: 'Description may also contain <strong>HTML</strong>'
        }
    });
});

btnCreatingFeatureIntroductions.addEventListener("click", e => {
    e.stopPropagation();
    const driver = new Driver();
    // Define the steps for introduction
    driver.defineSteps([
        {
            element: '#first-element-introduction',
            popover: {
                
                title: 'Title on Popover',
                description: 'Body of the popover',
                position: 'top'
            }
        },
        {
            element: '#second-element-introduction',
            popover: {
                title: 'Title on Popover',
                description: 'Body of the popover',
                position: 'top'
            }
        },
        {
            element: '#third-element-introduction',
            popover: {
                title: 'Title on Popover',
                description: 'Body of the popover',
                position: 'bottom'
            }
        },
    ]);
    // Start the introduction
    driver.start();
});
// btnCreatePost.addEventListener("click", e => {
//     driver.highlight('#create-post');
// });
btnWithoutOverlay.addEventListener("click", e => {
    const driver = new Driver({
        opacity: 0,
    });

    driver.highlight({
        element: '#without-overlay',
        popover: {
            title: 'Title for the Popover',
            description: 'Description for it',
            position: 'top', // can be `top`, `left`, `right`, `bottom`
        }
    });
});


