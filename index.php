<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Cookie Clicker</title>

    <!-- Collection of links to various resources -->
    <link rel="shortcut icon" type="image/png" href="resources/content/favicon.png"/>
    <link rel="stylesheet" type="text/css" href="resources/css/main.css"/>

    <!-- Collection of scripts -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script defer src="scripts/main.js"></script>
</head>
<body>
    <!-- The wrapper for the whole page -->
    <div id="wrapper">

        <!-- The header will contain information about the player progress -->
        <div id="header">
          <div class="inline-wrapper">

            <img id="frame-top-bg" src="resources/content/screens/game/frame-top-background.png"/>
            <img id="frame-top" src="resources/content/screens/game/frame-top.png"/>

            <div id="bar-coins" class="bar">
              <img src="resources/content/screens/game/bar-coins.png"/>
              <span id="coins" class="bar-values">555555555</span>
            </div>

            <div id="bar-rank" class="bar">
              <img src="resources/content/screens/game/bar-rank.png"/>
              <span id="rank" class="bar-values">1</span>
            </div>

            <div id="bar-gems" class="bar">
              <img src="resources/content/screens/game/bar-gems.png"/>
              <span id="gems" class="bar-values">5555</span>
            </div>
            <!-- <input id="settings" type="submit" value="settings"/> -->
          </div>
        </div>

        <!-- The game viewport where all the action will happend -->
        <div id="game">
            <!-- The area where the clicker will take meaning -->
            <div id="clickArea">
            </div>
        </div>

        <!-- The footer will contain buttons to various locations like virtual shop, upgrades, personal information and such.. -->
        <div id="footer">
            <img id="frame-bottom-bg" src="resources/content/screens/game/frame-bottom-background.png"/>
        </div>
    </div>
</body>
</html>
