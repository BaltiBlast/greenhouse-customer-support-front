const utils = {
  getFormValues: (client) => {
    const latestMeasurement = client.measurements[0];

    return {
      firstName: client.firstName,
      lastName: client.lastName,
      birthDate: client.birthDate.slice(0, 10),
      height: client.height ?? "",
      weight: latestMeasurement?.weight ?? "",
      bodyFat: latestMeasurement?.bodyFat ?? "",
      muscleMass: latestMeasurement?.muscleMass ?? "",
      objectives: client.objectives ?? "",
      pathologies: client.pathologies.length
        ? client.pathologies.map((value) => ({ value }))
        : [{ value: "" }],
      limitations: client.limitations ?? "",
      hasEatingDisorder: client.hasEatingDisorder,
      emergencyContactName: client.emergencyContact?.name ?? "",
      emergencyContactRelationship: client.emergencyContact?.relationship ?? "",
      emergencyContactPhone: client.emergencyContact?.phone ?? "",
    };
  },

  getUpdatedClient: (client, data, measurement) => {
    const emergencyContactValues = [
      data.emergencyContactName,
      data.emergencyContactRelationship,
      data.emergencyContactPhone,
    ];
    const hasEmergencyContact = emergencyContactValues.some((value) => value.trim());

    return {
      ...client,
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      birthDate: data.birthDate,
      height: data.height,
      objectives: data.objectives.trim() || undefined,
      pathologies: data.pathologies.map(({ value }) => value.trim()).filter(Boolean),
      limitations: data.limitations.trim() || undefined,
      hasEatingDisorder: data.hasEatingDisorder,
      emergencyContact: hasEmergencyContact
        ? {
            name: data.emergencyContactName.trim(),
            relationship: data.emergencyContactRelationship.trim(),
            phone: data.emergencyContactPhone.trim(),
          }
        : undefined,
      measurements: measurement
        ? [measurement, ...client.measurements.filter(({ id }) => id !== measurement.id)]
        : client.measurements,
    };
  },

  formatMeasurementDate: (date) =>
    new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(date)),
};

export default utils;
