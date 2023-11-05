import { Checkbox, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

interface Processo {
  numeroProcesso: string;
  procuradoria: string;
  dataRecebimento: string;
  status: string;
}

enum Status {
  concluido = "Concluido",
  aberto = "Aberto",
  deletado = "Deletado",
}

const simuladoDefault: Processo[] = [
  {
    numeroProcesso: "1.1/1",
    procuradoria: "adasdasd",
    dataRecebimento: "22/02/2023",
    status: Status.aberto,
  },
  {
    numeroProcesso: "2.2/2",
    procuradoria: "123123123",
    dataRecebimento: "22/02/2023",
    status: Status.concluido,
  },
  {
    numeroProcesso: "2.2/2",
    procuradoria: "ffghfghfghfg",
    dataRecebimento: "22/02/2023",
    status: Status.deletado,
  },
];

export default function Compra() {
  const [simulado, setSimulado] = useState(simuladoDefault);
  const [showDeleted, setShowDeleted] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const filtrar = () => {
    let testettt: Processo[] = simulado;

    testettt = showDeleted
      ? testettt
      : testettt.filter((x) => x.status !== Status.deletado);

    testettt = showCompleted
      ? testettt
      : testettt.filter((x) => x.status !== Status.concluido);
    return testettt;
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={showDeleted}
            onChange={(event) => {
              setShowDeleted(event.target.checked);
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Mostrar deletados"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showCompleted}
            onChange={(event) => {
              setShowCompleted(event.target.checked);
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Mostrar concluidos"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Numero</TableCell>
              <TableCell>Procuradoria</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtrar().map((row) => (
              <TableRow
                key={row.numeroProcesso}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.numeroProcesso}</TableCell>
                <TableCell>{row.procuradoria}</TableCell>
                <TableCell>{row.dataRecebimento}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
