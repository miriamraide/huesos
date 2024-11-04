function Mascotas() {
  return (
    <select
      className="text-blue-600 text-[20px] w-[100px]"
      name="mascotas"
      id="mascotas"
    >
      <option value="perros" className="font-bold">
        {" "}
        <b>Perros </b>
      </option>
      <option value="gatos" className="font-bold">
        Gatos
      </option>
      <option value="otros" className="font-bold">
        Otros
      </option>
    </select>
  );
}

export default Mascotas;
