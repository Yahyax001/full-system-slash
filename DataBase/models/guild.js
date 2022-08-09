const { Schema,model } = require("mongoose")
var fs = require('fs');

const data =new Schema({
  guildID:String,
  welcome:{
    channel:{
      type:String,
      default: null,
    },
    toggle:{
      image:{
      type:Boolean,
      default:false
      },
      message:{
      type:Boolean,
      default:false
      },
    },
    avatar:{
      x:{
        type:Schema.Types.Decimal128,
        default:18.59,
      },
      y:{
        type:Schema.Types.Decimal128,
        default:58,
      },
      width:{
        type:Schema.Types.Decimal128,
        default:90.99999999999997,
      },
      height:{
        type:Schema.Types.Decimal128,
        default:83,
      },
    },
    username:{
      x:{
        type:Schema.Types.Decimal128,
        default:115,
      },
      y:{
        type:Schema.Types.Decimal128,
        default:97,
      },
    },
    message:{
      type:String,
      default: null,
    },
    text:{
      x:{
        type:Schema.Types.Decimal128,
        default:113.34375,
      },
      y:{
        type:Schema.Types.Decimal128,
        default:117.203125,
      },
      content:{
        type:String,
        default: `Welcome to Our server`,
      }
    },
    background:{
      type:String,//
      default: null//new Buffer.from(fs.readFileSync("./welcome.png")).toString('base64')
      //default: "https://media.discordapp.net/attachments/737470353890082987/947970013892083722/1646066035646.png",
    }
  },
  autoReply:{
    type:Array,
    default:[],
  },
  autoRoles:{
    humans:{
      roles:{
        type:Array,
        default:[],
      },
      toggle:{
        type:Boolean,
        default:true,       
      }
    },
    bots:{
      roles:{
        type:Array,
        default:[],
      },
      toggle:{
        type:Boolean,
        default:true,       
      }
    }
  },
  muted:{
    type:Array,
    default:[],
  },
  funPoints:{
    type:Array,
    default:[],
  },
  autoLinesChannel:{
    type:Array,
    default:[]
  },
  autoReactionChannel:{
    type:Array,
    default:[]
  },
  greet:{
    channel:{
      type:String,
      default: null,
    },
    time:{
      type:Number,
      default:5
    },
    message:{
      type:String,
      default: `%user.mention%`,
    },
    toggle:{
      type:Boolean,
      default: true,
    }
  },
  active:{
    admins:{
      type:Array,
      default:[]
    },
    temp:{
      type:Array,
      default:[]
    },
    activated:{
      type:Array,
      default:[]
    },
    log:{
      type:String,
      default:null
    }
  },
}, { versionKey: false }) 

module.exports = new model("guild",data)