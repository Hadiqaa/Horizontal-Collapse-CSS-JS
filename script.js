function collapsePrimaryPanel() {
    var primaryEl = document.getElementsByClassName("primary-panel");
    primaryEl[0].classList.add("collapsed");
    console.log("primary panel collapsed");

  }

  function expandPrimaryPanel() {
    var primaryEl = document.getElementsByClassName("primary-panel");
    primaryEl[0].classList.remove("collapsed");
    console.log("primary panel expanded");
  }


  

  function collapseSecondaryPanel() {
    var primaryEl = document.getElementsByClassName("secondary-panel");
    primaryEl[0].classList.add("collapsed");
    console.log("Secondary panel collapsed");
    
  }

  function exapandSecondaryPanel() {
    var primaryEl = document.getElementsByClassName("secondary-panel");
    primaryEl[0].classList.remove("collapsed");
    console.log("Secondary panel expanded");
    
  }


  function checkAndExpandBlackPanel() {
    var primaryPanel = document.getElementsByClassName("primary-panel")[0];
    var secondaryPanel = document.getElementsByClassName("secondary-panel")[0];
    var blackPanel = document.getElementsByClassName("black-panel")[0];
    var panelContainer = document.getElementsByClassName("panel-container")[0];

    if (primaryPanel.classList.contains("collapsed") && secondaryPanel.classList.contains("collapsed")) {
        blackPanel.classList.add("full-width");
        panelContainer.classList.add("panel-container-collapse");
        console.log("Black panel expanded to full width");
    }
     else {
        blackPanel.classList.remove("full-width");
        panelContainer.classList.remove("panel-container-collapse");
        console.log("Black panel reverted to default width");
    }
}


function collapseBlackPanel() {
  var primaryPanel = document.getElementsByClassName("primary-panel")[0];
  var secondaryPanel = document.getElementsByClassName("secondary-panel")[0];
  var blackPanel = document.getElementsByClassName("black-panel")[0];
  var panelContainer = document.getElementsByClassName("panel-container")[0];


  if (!primaryPanel.classList.contains("collapsed") || !secondaryPanel.classList.contains("collapsed")) {
    blackPanel.classList.remove("full-width");
    panelContainer.classList.remove("panel-container-collapse");
    console.log("Black panel reverted to default width");
}

}




function handleResponsiveCollapse() {

  if (window.innerWidth <= 1100) {
      collapsePrimaryPanel();
  } else {
      expandPrimaryPanel();
      
  }

  if (window.innerWidth <= 990) {
      collapseSecondaryPanel();
      checkAndExpandBlackPanel();
  } else {
      exapandSecondaryPanel();
      collapseBlackPanel();
  }
}


handleResponsiveCollapse();
window.addEventListener('resize', handleResponsiveCollapse);