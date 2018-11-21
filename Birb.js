module.exports = {
    chooseBirb: function(){
        var birb = [
'（・⊝・）',
'(◉Θ◉)',
'(￣･Θ･￣)',
'ლ(⁰⊖⁰ლ)',
'ლ(◉◞⊖◟◉｀ლ)',
'	( ˙Θ˙(˙Θ˙)˙Θ˙ )',
'（´◉◞⊖◟◉｀）',
'⋋(◍’Θ’◍)⋌',
'(•ө•)♡',
'ತ ⌔̫ ತ',
'(•͈⌔•͈⑅)',
'♩є(･◇･｡)э'
  ]
  var randobirb = Math.floor((Math.random() * birb.length + 0));
  return birb[randobirb]
    }
}