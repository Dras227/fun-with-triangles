@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;700&display=swap');

:root {
    --primary-color: #06B6D4;
    --secondary-color: #3F3D56;
    --tertiary-color: #EDEDF4;
    --quaternary-color: #CEE9F0;
}

body {
}

* {
    font-family: "IBM Plex Sans Arabic",sans-serif;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}

.link {
    box-sizing: border-box;

    text-decoration: none;
    padding: 0.5rem 1rem;
}

.link-primary {
    max-width: 140px;
    padding: 0.6rem 1.2rem;
    background-color: var(--primary-color);
    color: var(--primary-color);
    margin: 1rem auto;
    border-radius: 2rem;
}
.link-secondary {
    background-color: var(--primary-color);
    border-radius: 0.5rem;
    border: 1px solid var(--primary-color);
    max-width: 140px;
    margin: 1rem;
}

/* lists */

.list-non-bullet {
    list-style:none;
}

.list-item-inline {
    display: inline;
    padding: 0rem 0.5rem
}

.navigation {
    background-color: var(--primary-color);
    color: white;
    padding: 1rem;
    border-bottom-left-radius: 1rem;
}

.nav-brand {
    font-weight: bold;
    font-size: 1.1rem;
    font-style: italic;
}

.navigation .nav-pills {
    text-align: right;
}

.navigation .link-active {
    font-weight: bold;
}

.navigation .link {
    color: white;
}

.container {
    display: block;
    width: 100%;
    max-width:500px;
    min-width:200px;
    text-align: center;
    margin:auto;
}
/* nav bar end */

input,
label {
    display: block;
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    text-align: center;
    margin: auto;
    padding: 5px 0;
    border-radius: 5px;
}

input {
    border: 1px solid grey;
}

button {
    margin-top: 20px;
    padding: 7px 13px;
}

#output {
    margin-top: 20px;
}


h1 {
    padding: 20px;
}

 input[type="radio"] {
     margin-right: 0;
     display: inline;
 }
.question-container label {
     display: inline;
    
 }