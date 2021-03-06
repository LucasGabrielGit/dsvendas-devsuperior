import { BarCharts } from "components/BarCharts";
import { DataTable } from "components/DataTable";
import { DonutCharts } from "components/DonutChart";
import { Footer } from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
function App() {
  return (
    <>
      <Navbar />
      <div className="container shadow-sm">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarCharts />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <DonutCharts />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
