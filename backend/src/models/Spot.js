const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    }
}, {
  toJSON: {
    virtuals: true,
  },
});

//SpotSchema.virtual('thumbnail_url').get(function() {
  //return `http://localhost:3333/files/${this.thumbnail}`
//})

// foi necessário colocar o ip da rede para puxar as imagens para o mobile

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://192.168.0.4:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);