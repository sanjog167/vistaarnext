async function fetchSupplierDetails(id: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/supplier/${id}/`);
  if (!res.ok) {
    if (res.status == 404) {
      throw new Error("Supplier does not exist!");
    }
    throw new Error("Something went wrong");
  }

  const json = await res.json();
  return json;
}

export default async function Supplier({params}: {params: { id: string }}) {
  try {
    var supplierDetails = await fetchSupplierDetails(params.id);
  } catch (e: any) {
    return <p>{e.message}</p>
  }

  return (
    <p>Supplier page</p>
  );
}
