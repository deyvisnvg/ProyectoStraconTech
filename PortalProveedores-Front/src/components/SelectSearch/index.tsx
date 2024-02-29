import { useEffect, useState } from "react";
import { Select, Space } from "antd";


export default function SelectSearch({ proveedorService, values, setValues, setCurrentPage }: any) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await proveedorService.getAll();
        setData(response.data);
      } catch (error) {
        console.error('Error fetching proveedor:', error);
      }
    };

    fetchData();
  }, []);

  const option = data.map(({ id, nombreProveedor }: any) => {
    return {
      value: id,
      label: nombreProveedor
    }
  })

  const onChange = (value: number) => {
    console.log(`selected ${value}`);
    const productFilter = values.products.filter(({proveedor}: any) => proveedor == value);
    setCurrentPage(1);
    setValues({
      ...values,
      productSelectSearch: productFilter,
      productSearchTable: productFilter
    })
};

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className="pb-6">
      <p className="font-bold">Proveedor</p>
      <Space wrap>
        <Select
          showSearch
          placeholder="Seleccione proveedor"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          style={{ width: 180 }}
          options={option} 
        />
      </Space>
    </div>
  );
}
