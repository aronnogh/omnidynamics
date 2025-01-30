const MinusSvg = ({ className = "" }) => {
    return (
      <svg className={`${className} || ""`} width="11" height="11" fill="white">
        <path
          d="M10 4H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
          fill="#ada8c4"
        />
      </svg>
    );
  };
  
  export default MinusSvg;