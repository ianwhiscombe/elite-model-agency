
const endpoint = 'https://randomuser.me/api/?results=6&exc=login'

var usersArray = [];
const profilesMount = document.querySelector('.profiles-mount');

fetch(endpoint)
    .then(response => response.json())
    .then(data => usersArray = usersArray.concat(data.results))
    .then(function displayUsers(usersArray) {
        const html = usersArray.map(user => {

            const pictureURL = user.picture.large;
            const firstName = user.name.first;
            const lastName = user.name.last;
            const gender = user.gender;
            const age = user.dob.age;
            const emailAddress = user.email;
            const city = user.location.city;
            const state = user.location.state;
    
            return `
            <div class="profile-card">
                <header>
                    <img class="picture" src="${pictureURL}">
                    <h1 class="name">${firstName} ${lastName}</h1>
                    <h2 class="personal-details">${gender}, ${age}</h2>
                    <h3 class="location">${city}, ${state}</h3>
                </header>
                <div class="profile-bio">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero voluptatum aspernatur laboriosam, nemo eaque earum quidem ex iste.</p>
                    <span class="email">${emailAddress}</span>
                </div>

                <div class="separator-line"></div>
                
                <footer>
                    <ul class="profile-social-links">
                    <li>
                        <a href="https://en-gb.facebook.com">
                        <svg height="2rem" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="2rem" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" style="fill:#1777f2;"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com">
                        <svg height="2rem" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="2rem" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M256,0c-69.526,0 -78.244,0.295 -105.549,1.541c-27.248,1.243 -45.858,5.57 -62.142,11.899c-16.834,6.542 -31.111,15.296 -45.342,29.528c-14.232,14.231 -22.986,28.508 -29.528,45.342c-6.329,16.283 -10.656,34.893 -11.899,62.141c-1.246,27.305 -1.54,36.023 -1.54,105.549c0,69.524 0.294,78.242 1.54,105.547c1.243,27.248 5.57,45.858 11.899,62.141c6.542,16.834 15.296,31.111 29.528,45.344c14.231,14.231 28.508,22.985 45.342,29.527c16.284,6.328 34.894,10.656 62.142,11.899c27.305,1.245 36.023,1.54 105.549,1.54c69.524,0 78.242,-0.295 105.547,-1.54c27.248,-1.243 45.858,-5.571 62.141,-11.899c16.834,-6.542 31.111,-15.296 45.344,-29.527c14.231,-14.233 22.985,-28.51 29.527,-45.344c6.328,-16.283 10.656,-34.893 11.899,-62.141c1.245,-27.305 1.54,-36.023 1.54,-105.547c0,-69.526 -0.295,-78.244 -1.54,-105.549c-1.243,-27.248 -5.571,-45.858 -11.899,-62.141c-6.542,-16.834 -15.296,-31.111 -29.527,-45.342c-14.233,-14.232 -28.51,-22.986 -45.344,-29.528c-16.283,-6.329 -34.893,-10.656 -62.141,-11.899c-27.305,-1.246 -36.023,-1.541 -105.547,-1.541Zm0,46.127c68.354,0 76.451,0.26 103.445,1.492c24.959,1.139 38.514,5.309 47.535,8.814c11.949,4.644 20.477,10.192 29.435,19.15c8.959,8.958 14.506,17.487 19.15,29.435c3.506,9.021 7.676,22.576 8.815,47.535c1.231,26.995 1.492,35.092 1.492,103.447c0,68.354 -0.261,76.451 -1.492,103.445c-1.139,24.959 -5.309,38.514 -8.815,47.535c-4.644,11.949 -10.191,20.477 -19.15,29.435c-8.958,8.959 -17.486,14.506 -29.435,19.15c-9.021,3.506 -22.576,7.676 -47.535,8.814c-26.99,1.232 -35.086,1.493 -103.445,1.493c-68.361,0 -76.455,-0.261 -103.447,-1.493c-24.959,-1.138 -38.514,-5.308 -47.535,-8.814c-11.949,-4.644 -20.477,-10.191 -29.436,-19.15c-8.958,-8.958 -14.506,-17.486 -19.149,-29.435c-3.506,-9.021 -7.676,-22.576 -8.815,-47.535c-1.232,-26.994 -1.492,-35.091 -1.492,-103.445c0,-68.355 0.26,-76.452 1.492,-103.447c1.139,-24.959 5.309,-38.514 8.815,-47.535c4.643,-11.948 10.191,-20.477 19.149,-29.435c8.959,-8.958 17.487,-14.506 29.436,-19.15c9.021,-3.505 22.576,-7.675 47.535,-8.814c26.995,-1.232 35.092,-1.492 103.447,-1.492Z" style="fill:url(#_Linear1);fill-rule:nonzero;"/><path d="M256,341.332c-47.129,0 -85.334,-38.205 -85.334,-85.332c0,-47.129 38.205,-85.334 85.334,-85.334c47.127,0 85.332,38.205 85.332,85.334c0,47.127 -38.205,85.332 -85.332,85.332Zm0,-216.792c-72.604,0 -131.46,58.856 -131.46,131.46c0,72.602 58.856,131.458 131.46,131.458c72.602,0 131.458,-58.856 131.458,-131.458c0,-72.604 -58.856,-131.46 -131.458,-131.46Z" style="fill:url(#_Linear2);fill-rule:nonzero;"/><path d="M423.372,119.346c0,16.967 -13.754,30.72 -30.72,30.72c-16.966,0 -30.72,-13.753 -30.72,-30.72c0,-16.966 13.754,-30.719 30.72,-30.719c16.966,0 30.72,13.753 30.72,30.719Z" style="fill:url(#_Linear3);fill-rule:nonzero;"/></g><defs><linearGradient gradientTransform="matrix(-149.618,494.3,-494.3,-149.618,300.81,-27.1283)" gradientUnits="userSpaceOnUse" id="_Linear1" x1="0" x2="1" y1="0" y2="0"><stop offset="0" style="stop-color:#515bd4;stop-opacity:1"/><stop offset="0.26" style="stop-color:#9510b8;stop-opacity:1"/><stop offset="0.66" style="stop-color:#e51804;stop-opacity:1"/><stop offset="1" style="stop-color:#feda77;stop-opacity:1"/></linearGradient><linearGradient gradientTransform="matrix(-149.618,494.3,-494.3,-149.618,300.81,-27.1283)" gradientUnits="userSpaceOnUse" id="_Linear2" x1="0" x2="1" y1="0" y2="0"><stop offset="0" style="stop-color:#515bd4;stop-opacity:1"/><stop offset="0.26" style="stop-color:#9510b8;stop-opacity:1"/><stop offset="0.66" style="stop-color:#e51804;stop-opacity:1"/><stop offset="1" style="stop-color:#ffbf00;stop-opacity:1"/></linearGradient><linearGradient gradientTransform="matrix(-149.618,494.3,-494.3,-149.618,300.81,-27.1283)" gradientUnits="userSpaceOnUse" id="_Linear3" x1="0" x2="1" y1="0" y2="0"><stop offset="0" style="stop-color:#515bd4;stop-opacity:1"/><stop offset="0.26" style="stop-color:#9510b8;stop-opacity:1"/><stop offset="0.66" style="stop-color:#e51804;stop-opacity:1"/><stop offset="1" style="stop-color:#ffbf00;stop-opacity:1"/></linearGradient></defs></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/home">
                        <svg height="2rem" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="2rem" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><rect height="400" style="fill:none;" width="400" x="56" y="56"/><path d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104" style="fill:#1da1f2;fill-rule:nonzero;"/></svg>  
                        </a>
                    </li>
                    </ul>
                </footer>
  
            </div>`    
        }).join('');
        
        profilesMount.innerHTML = html;
        
    })
    .catch(function(error) {
        console.log(error);
});


