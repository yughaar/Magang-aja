export async function getGlobal() {
  try {
    const res = await fetch("http://localhost:1337/api/global", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Gagal mengambil data dari server backend");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching global:", error);
    return [];
  }
}
