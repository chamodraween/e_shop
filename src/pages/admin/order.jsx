
import React from "react";
import DenseTable from "../../common/admin_data_table/DataTable.jsx";
/*import OrderTable from "../../common/admin_data_table/OrderTable.jsx";*/



function OrderPage() {


    return (
        <div>
            <h2 style={{color:'#494949'}}>Order Page</h2>
            <DenseTable/>
            {/*<div style={{marginTop: '20px'}}>
                <h3>Orders</h3>
             <OrderTable />
            </div> */}

        </div>
    );
}

export default OrderPage;
