var array1 = "artless,bawdy,beslubbering,bootless,churlish,cockered,clouted,craven,currish,dankish,dissembling,droning,errant,fawning,fobbing,froward,frothy,gleeking,goatish,gorbellied,impertinent,infectious,jarring,loggerheaded,lumpish,mammering,mangled,mewling,paunchy,pribbling,puking,puny,qualling,rank,reeky,roguish,ruttish,saucy,spleeny,spongy,surly,tottering,unmuzzled,vain,venomed,villainous,warped,wayward,weedy,yeasty".split(",");

var array2 = "base-court,bat-fowling,beef-witted,beetle-headed,boil-brained,clapper-clawed,clay-brained,common-kissing,crook-pated,dismal-dreaming,dizzy-eyed,doghearted,dread-bolted,earth-vexing,elf-skinned,fat-kidneyed,fen-sucked,flap-mouthed,fly-bitten,folly-fallen,fool-born,full-gorged,guts-griping,half-faced,hasty-witted,hedge-born,hell-hated,idle-headed,ill-breeding,ill-nurtured,knotty-pated,milk-livered,motley-minded,onion-eyed,plume-plucked,pottle-deep,pox-marked,reeling-ripe,rough-hewn,rude-growing,rump-fed,shard-borne,sheep-biting,spur-galled,swag-bellied,tardy-gaited,tickle-brained,toad-spotted,unchin-snouted,weather-bitten".split(",");
var array3 = "apple-john,baggage,barnacle,bladder,boar-pig,bugbear,bum-bailey,canker-blossom,clack-dish,clotpole,coxcomb,codpiece,death-token,dewberry,flap-dragon,flax-wench,flirt-gill,foot-licker,fustilarian,giglet,gudgeon,haggard,harpy,hedge-pig,horn-beast,hugger-mugger,joithead,lewdster,lout,maggot-pie,malt-worm,mammet,measle,minnow,miscreant,moldwarp,mumble-news,nut-hook,pigeon-egg,pignut,puttock,pumpion,ratsbane,scut,skainsmate,strumpet,varlot,vassal,whey-face,wagtail".split(",");
var timesUsed = 0;
use();

function blockMove() {
    event.preventDefault();
}

$('#generateButton').click(function() {
    use();
});

$('#infolist_info').click(function() {
    alert("Info on insult list:\n\nWe used a list of insults found here: http://www.pangloss.com/seidel/shake_rule.html");
});

$('#disclaimer').click(function() {
    alert("Disclaimer:\n\nThis application/webpage was created as a joke. We are not promoting any form of verbal harassment.");
});

$('#jumbotron').hide(2, function() {});
$('#jumbotron').fadeIn(400, function() {});

$('#credit').hide(2, function() {});
$('#credit').fadeIn(2000, function() {});

$('#insults').hide(2, function() {});
$('#insults').fadeIn(1000, function() {});

function rand(min, max) {
    var offset = min;
    var range = (max - min) + 1;

    var randomNumber = Math.floor(Math.random() * range) + offset;
    return randomNumber;
}

setInterval(function() {
    use();
}, 10000);

function use() {
    timesUsed++;
    $('#counter').html("<p>used " + timesUsed + " times.");

    var message = generate();
    $('#insults').fadeOut(100, function() {
        $('#insults').html('<div class="page-header"><h1><small>' + message + '</small></h1></div>');
        $('#insults').fadeIn(100, function() {});
    });
}

function generate() {
    return "" + array1[rand(0, array1.length - 1)] + " " + array2[rand(0, array1.length - 1)] + " " + array3[rand(0, array1.length - 1)];
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (key == 38) {
        prompt();
    }

}