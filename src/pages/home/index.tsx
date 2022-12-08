import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import api from "../../services/api";
import Produtos from "../../models/produto";

export default function Home() {

  const [produtos, setProdutos] = useState<Produtos[]>([])

  async function BuscaProduto() {
    const res = await api.get('produto');
    setProdutos(res.data);
  }


  useEffect(() => {
    BuscaProduto()
  },[produtos.length])

  return (
    <Box sx={{ height: "calc(100vh - 140px)" }}>
      <h1>HOME</h1>
    

      
    </Box>
  );
}

