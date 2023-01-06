"use strict";

const email = "aliodabas_a@hotmail.com";
const partialEmail = email.replace(/(\w{2})[\w.-]+@([\w.]+\w)/, "$1***@$2");
console.log(partialEmail);



// Another solution

// function protectEmail(email) {
//     // E-posta adresini "@" işaretine göre böl
//     let [username, domain] = email.split('@');
//     // Kullanıcı adının son üç karakterini "..." ile değiştir
//     let hiddenUsername = username.slice(0, username.length - 3) + '...';
//     // Gizlenmiş kullanıcı adı ve etki alanını birleştir ve yeni gizlenmiş e-posta adresini döndür
//     return hiddenUsername + '@' + domain;
//   }
//   ​
//   console.log(protectEmail("robin_singh@example.com"));  // Output: "robin_si...@example.com"
