module.exports = {
    chooseFlip: function(){
       var flip = [
        '(╯°□°）╯︵ ┻━┻',
        '(ノಠ益ಠ)ノ彡┻━┻',
        'ʕノ•ᴥ•ʔノ ︵ ┻━┻',
        '(ﾉꐦ ⊙曲ఠ)ﾉ彡┻━┻',
        '(ﾉꐦ ๑´Д`๑)ﾉ彡┻━┻',
        '(ﾉ￣□￣)ﾉ ~┻━┻',
        '‎(ﾉಥ益ಥ）ﾉ ┻━┻',
        '(┛ಠДಠ)┛彡┻━┻',
        '(ﾉ≧∇≦)ﾉ ﾐ ┸━┸',
        '(╯=▃=)╯︵┻━┻',
        '┻━┻ ︵ ¯\ (ツ)/¯ ︵ ┻━┻',
        '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻',
        '(╯°□°)╯︵ ʞɹoʍ',
        '(ﾉꐦ ◎曲◎)ﾉ=͟͟͞͞ ⌨'
        ]
        var randoflip = Math.floor((Math.random() * flip.length + 0));
        return flip[randoflip]
    },
    chooseFixFlip: function(){
        var fixflip = [
        '┬──┬◡ﾉ(° -°ﾉ)',
        '┬─┬ノ(ಠ_ಠノ)',
        '┬━┬ ノ( ゜-゜ノ)',
        '┳━┳ ヽ༼ಠل͜ಠ༽ﾉ',
        '┬──┬ ¯\_(ツ)',
        '	┬──┬ ノ( ゜-゜ノ)',
        '(ヘ･_･)ヘ┳━┳',
        '(╯°Д°）╯︵/(.□ . )',
        '(ノಠ ∩ಠ)ノ彡( o°o)',
        '┬──┬ ︵(╯。□。）╯',
        '┬─┬ ︵ /(.□. \）'
        ]
    var randofixflip = Math.floor((Math.random() * fixflip.length + 0));
    return fixflip[randofixflip];
    }
}