const a=t=>new Date(t).toLocaleDateString("vi-VN",{year:"numeric",month:"long",day:"numeric"}),n=t=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(t);export{a,n as f};
