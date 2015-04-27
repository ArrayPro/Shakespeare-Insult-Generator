var array1 = "artless,bawdy,beslubbering,bootless,churlish,cockered,clouted,craven,currish,dankish,dissembling,droning,errant,fawning,fobbing,froward,frothy,gleeking,goatish,gorbellied,impertinent,infectious,jarring,loggerheaded,lumpish,mammering,mangled,mewling,paunchy,pribbling,puking,puny,qualling,rank,reeky,roguish,ruttish,saucy,spleeny,spongy,surly,tottering,unmuzzled,vain,venomed,villainous,warped,wayward,weedy,yeasty".split(",");

var array2 = "base-court,bat-fowling,beef-witted,beetle-headed,boil-brained,clapper-clawed,clay-brained,common-kissing,crook-pated,dismal-dreaming,dizzy-eyed,doghearted,dread-bolted,earth-vexing,elf-skinned,fat-kidneyed,fen-sucked,flap-mouthed,fly-bitten,folly-fallen,fool-born,full-gorged,guts-griping,half-faced,hasty-witted,hedge-born,hell-hated,idle-headed,ill-breeding,ill-nurtured,knotty-pated,milk-livered,motley-minded,onion-eyed,plume-plucked,pottle-deep,pox-marked,reeling-ripe,rough-hewn,rude-growing,rump-fed,shard-borne,sheep-biting,spur-galled,swag-bellied,tardy-gaited,tickle-brained,toad-spotted,unchin-snouted,weather-bitten".split(",");
var timesUsed = 0;
use();
function blockMove() {
      event.preventDefault();
}

$('#generateButton').click(function(){
	use();
});


$('#jumbotron').hide(2, function(){});
$('#jumbotron').fadeIn(400, function(){

});

function rand(min, max) {
  var offset = min;
  var range = (max - min) + 1;

  var randomNumber = Math.floor( Math.random() * range) + offset;
  return randomNumber;
}

setInterval(function() {
	use();
}, 3000);

function use(){
	timesUsed++;
	$('#counter').html("<p>used " + timesUsed + " times.");
	
	var message = "test";
	$('#insults').fadeOut(100, function(){
		$('#insults').html('<div class="page-header"><h1><small>' + message + '</small></h1></div>');
		$('#insults').fadeIn(100, function(){});
	});
  

//Hardcoded: Terrible I know, forgive me please
	
}
/*

*/