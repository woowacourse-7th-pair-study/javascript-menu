const isLengthOverMin = (minLength, target) => target.length >= minLength;

const isLengthUnderMax = (maxLength, target) => target.length <= maxLength;

exports.isLengthOverMin = isLengthOverMin;
exports.isLengthUnderMax = isLengthUnderMax;
