superbowlWin = (record) => {
    const result = record.find( element => element.result === "W");
      return result ? result.year : undefined;
};