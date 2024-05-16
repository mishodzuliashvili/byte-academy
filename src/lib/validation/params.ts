export function validateArrayParam(
  value: string | string[] | undefined,
  validValues: string[]
) {
  if (!value) {
    return null;
  }
  value = Array.isArray(value) ? value : [value];
  value = value.filter((v) => validValues.includes(v));
  if (value.length === 0) {
    return null;
  }
  return value;
}

export function validateParam(
  value: string | string[] | undefined,
  validValues: string[]
) {
  let newValues = validateArrayParam(value, validValues);
  if (!newValues) {
    return null;
  }
  return newValues[0];
}

export function validateArrayNumberParam(
  value: string | string[] | undefined,
  validRange: [number, number] | null = null
) {
  if (!value) {
    return null;
  }
  value = Array.isArray(value) ? value : [value];
  let newValues = value.map((v) => +v);
  newValues = newValues.filter((v) => !isNaN(v));
  if (validRange) {
    newValues = newValues.filter(
      (v) => v >= validRange[0] && v <= validRange[1]
    );
  }
  if (newValues.length === 0) {
    return null;
  }
  return newValues;
}

export function validateNumberParam(
  value: string | string[] | undefined,
  validRange: [number, number] | null = null
) {
  let newValues = validateArrayNumberParam(value, validRange);
  if (!newValues) {
    return null;
  }
  return newValues[0];
}
