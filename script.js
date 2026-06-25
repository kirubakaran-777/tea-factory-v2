/*************************
  SUPABASE SETUP (BROWSER)
**************************/
const supabaseUrl = "https://qjcjlavjgzhamigpchep.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqY2psYXZqZ3poYW1pZ3BjaGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwMTU1MzQsImV4cCI6MjA4MjU5MTUzNH0.cZYhOW3iZHho4MvN6I5EpW2fywPcSVSBlyRnxXhREpc";

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseAnonKey
);

/*************************
  SAVE RATES (FIX ERROR)
**************************/
function saveRates() {
  const rateA = document.getElementById("rateA").value;
  const rateBPlus = document.getElementById("rateBPlus").value;
  const rateB = document.getElementById("rateB").value;

  console.log("Rates:", rateA, rateBPlus, rateB);
  alert("Rates saved (logic can be added later)");
}

/*************************
  FORM SUBMIT = TRIGGER
**************************/
const form = document.getElementById("teaForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const farmer = document.getElementById("farmer").value;
  const phone = document.getElementById("phone").value;
  const weight = document.getElementById("weight").value;
  const grade = document.getElementById("grade").value;

  const { error } = await supabase
    .from("tea_stock")
    .insert([
      {
        farmer_name: farmer,
        phone: phone,
        weight_kg: weight,
        grade: grade
      }
    ]);

  if (error) {
    console.error("Insert error:", error);
    alert("Insert failed");
  } else {
    alert("Entry saved to Supabase");
    form.reset();
  }
});
