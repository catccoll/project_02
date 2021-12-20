import React, { memo } from "react";

export default memo(function () {
  const abc = function () {
    return 1;
  };

  return (
    <div>
      <h1>{abc()}</h1>
    </div>
  );
});
