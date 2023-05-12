<body>
    <div class="navbar">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/faction">Factions</a></li>
          </ul>
        </nav>
    </div>
</body>


<slot><h1>You shouldnt see this</h1></slot>

<style>
    .navbar {
    height: 6%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    }
  
  nav ul {
    list-style: none;
    margin-top: 1;
    margin-left:1%;
    padding: 0;
    display: flex;
    }
  
  nav li {
    margin-right: 20px;
    }
  
  nav a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    }
  
  nav a:hover {
    background-color: #ec4c02;
    color: #333;
    border-radius: 5px;
    }

    body {
        background: -webkit-linear-gradient(top, #000801, #b94c03);
        background: linear-gradient(to bottom, #000801, #b94c03);
        background-size: 100%, 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>