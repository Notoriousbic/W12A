class BoredActivity {
  getNewActivity() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        newActivity = JSON.parse(this.responseText);
        document.getElementById("jsinject").innerHTML += "Your activity " + newActivity.activity;
      }
    };
    ajax.open("GET", "http://www.boredapi.com/api/activity/", true );
    ajax.send();
  }
}

let newActivity = new BoredActivity();
newActivity.getNewActivity();

let 
