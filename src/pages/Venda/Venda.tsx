import { TextField } from "@mui/material";
import { useState } from "react";

interface Venda {
  titulo: string;
  descricao: string;
  valor: number;
  destinatario: string;
  fotos?: string[];
}

const vendaDefault: Venda = {
  titulo: "",
  descricao: "",
  valor: 0,
  destinatario: "",
};

export default function Venda() {
  const [venda, setVenda] = useState<Venda>(vendaDefault);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    setVenda((prev) => ({ ...prev, [event.target.id]: event.target.value }));
    // setVenda()
  };
  // renderizado
  return (
    <div>
      <div>
        <h1>Vender</h1>
        <hr />
      </div>
      <div>
        <TextField
          fullWidth
          value={venda.titulo}
          onChange={handleChange}
          id="titulo"
          label="Título"
          variant="standard"
        />
        <TextField
          fullWidth
          multiline
          rows={5}
          value={venda.descricao}
          onChange={handleChange}
          id="descricao"
          label="Descrição"
          variant="standard"
        />
      </div>
    </div>
  );
}
