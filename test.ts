const main = async () => {
  const res = await fetch('https://script.google.com/macros/s/AKfycbx82SX2k58XRPYDC5vrp7Bm7PgvEfwjuI-PN6EKs56wIy2TvSwtCO14T1UZSYVmo-Ag/exec?user_id=U1111111111&type=point', {
    method :'GET'
  });
  const data = await res.json()
  console.log(data);
}

main();