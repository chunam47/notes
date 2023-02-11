import React, { useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

import { ExperimentData, LOCAL_STORAGE_KEY } from "./App";

const DEBOUNCE_SAVE_DELAY_MS = 1000;

interface AutosaveProps {
  experimentData: ExperimentData;
}

export default function Autosave({ experimentData }: AutosaveProps) {
  // This is the side effect we want to run on users' changes.
  // In this example, we persist the changes in the localStorage.
  const saveExperimentData = useCallback((newExperimentData) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, newExperimentData.name);
    console.log("Saved successfully!");
  }, []);

  const debouncedSave = useCallback(
    debounce(async (newExperimentData: ExperimentData) => {
      saveExperimentData(newExperimentData);
    }, DEBOUNCE_SAVE_DELAY_MS),
    []
  );

  // The magic useEffect hook. This runs only when `experimentData.name` changes.
  // We could add more properties, should we want to listen for their changes.
  useEffect(() => {
    if (experimentData) {
      debouncedSave(experimentData);
    }
  }, [experimentData, debouncedSave]);

  // Do not display anything on the screen.
  return null;
}
