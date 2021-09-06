// Cek Username
const cekUsername = (username) => {
    let result = "";
    if(username = /^[a-z]{6,}$/.test(username)) {
        result = "Valid";
    }  else {
        result = "Invalid";
}
console.log(result);
return result;
}

cekUsername('nurjayasasongko')
cekUsername('nur')
cekUsername('nurjaya16')

// Cek Email
const cekEmail = (email) => {
    let result = "";
    
    if(email = /^([a-z\.\-])+\@(([a-z\-])+\.)+([a-z])+$/.test(email)) {
        result = "Valid";
    }  else {
        result = "Invalid";
    }
console.log(result);
return result;
}

cekEmail('afnurjayas@gmail.com') //Valid
cekEmail('afnurjayasgmail.com') //Invalid, tanpa @
cekEmail('Afnurjayas@gmail.com') //Invalid, ada huruf kapital

// Cek Password
const cekPassword = (password) => {
    let result = "";
    
    if(password = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        result = "Valid";
    }  else {
        result = "Invalid";
    }
console.log(result);
return result;
}

cekPassword('Nurjaya16') //Valid
cekPassword('Nurjay4') //Invalid, < 8 karakter
cekPassword('Nurjayasasongko') //Invalid, Tidak ada angka