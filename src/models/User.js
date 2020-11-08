import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
const UserSchema = new Schema({
  email: {
    type: String,
    requires: true,
    unique: true
  },
  password: { 
    type: String,
    required: true,
  },
  passwordHash: String,
});

// Criptografar a senha antes de salvar no banco de dados
UserSchema.pre('save', async function(){
  if(this.password) this.passwordHash = await bcrypt.hash(this.password, 8)
  this.password = undefined
})

export default new model('User', UserSchema);