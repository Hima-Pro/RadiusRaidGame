if('serviceWorker' in navigator && location.hostName != "localhost" || location.searchParams.get("install")=="true") {
  navigator.serviceWorker.register('sw.js');
}
function full() {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || pdoc.msExitFullscreen;
  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}
let z={zoom:1};
let meta=document.body.style;
function appZoom(zoom) {
  zoom=Number(zoom);
  if (z.zoom) {
    z.zoom=((z.zoom+zoom));
  } else {
    z.zoom=((1+zoom));
  }
  meta.zoom=z.zoom;
  // alert(z.zoom);
}
function mod(target, value=Infinity) {
  let mods={
    life: (e)=> $.hero.life=e,
    damage: (e)=> $.hero.weapon.bullet.damage=e,
  };
  if (target=="all") {
    for(var t in mods){
      mods[t](value);
    }
  } else {
    mods[target](value);
  }
}