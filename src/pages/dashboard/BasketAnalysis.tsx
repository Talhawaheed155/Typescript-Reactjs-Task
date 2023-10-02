import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const BasketAnalysis: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const query = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      `https://basket-analysis-i4z6nlxaua-uc.a.run.app/api/query?prompt=${prompt}`
    );

    setData(await response.json());
  };

  useEffect(() => {
    if (err) setTimeout(() => setErr(""), 6000);
  }, [err]);

  return (
    <div className="w-full">
      <form
        onSubmit={(e) =>
          query(e)
            .catch((err) => setErr(err.message))
            .finally(() => setLoading(false))
        }
        className="w-full h-[80px] flex justify-between px-4 py-3 gap-2"
      >
        <Input
          placeholder="Search"
          onChange={(e: any) => setPrompt(e.target.value)}
        />
        <Button className="w-[60px] max-w-[60px]" type="submit">
          Go
        </Button>
      </form>
      <br></br>
      {err && <div className="text-center text-red-500">{err}</div>}
      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <>
          {data && (
            <div className="pl-4">
              <table className=" w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {Object.keys(data).map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <h1 className="font-normal leading-none opacity-70">
                          {head}
                        </h1>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(data[Object.keys(data)[0]]).map((index) => (
                    <tr>
                      {Object.keys(data).map((key) => (
                        <td
                          className={`p-4 border-b border-blue-gray-50 bg-blue-gray-50/50`}
                        >
                          {data[key][index]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* {TABLE_ROWS.map(({ name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              );
            })} */}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BasketAnalysis;
