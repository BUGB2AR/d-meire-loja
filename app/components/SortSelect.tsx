type SortSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

const options = [
  {
    label: "Menor preço",
    value: "menor-preco",
  },
  {
    label: "Maior preço",
    value: "maior-preco",
  },
];

export default function SortSelect({
  value,
  onChange,
}: SortSelectProps) {
  const currentLabel =
    options.find((o) => o.value === value)?.label ||
    "Ordenar";

  return (
    <div className="uk-inline">
      <button
        className="uk-button uk-button-default"
        type="button"
        style={{
          borderRadius: 999,
          padding: "0 18px",
          height: 44,
          background: "#fff",
          border: "1px solid #e5e5e5",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: 10,
          boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
        }}
      >
        <span>{currentLabel}</span>

        <span
          uk-icon="chevron-down"
          style={{ width: 16 }}
        />
      </button>

      <div
        data-uk-dropdown="mode: click; offset: 10"
        style={{
          borderRadius: 16,
          padding: 10,
          minWidth: 220,
          background: "#fff",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          border: "1px solid #f1f1f1",
        }}
      >
        <div
          className="uk-text-meta uk-margin-small-bottom"
          style={{
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 1,
            padding: "0 10px",
          }}
        >
          Ordenar produtos
        </div>

        <ul
          className="uk-nav uk-dropdown-nav"
          style={{ marginTop: 8 }}
        >
          {options.map((option) => {
            const active = value === option.value;

            return (
              <li key={option.value}>
                <button
                  onClick={() => onChange(option.value)}
                  style={{
                    width: "100%",
                    border: 0,
                    background: active
                      ? "#111"
                      : "transparent",
                    color: active ? "#fff" : "#222",
                    textAlign: "left",
                    padding: "12px 14px",
                    borderRadius: 12,
                    cursor: "pointer",
                    transition: "all .2s ease",
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}