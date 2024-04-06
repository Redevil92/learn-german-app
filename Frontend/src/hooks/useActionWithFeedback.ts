export const useActionWithFeedback = async (
  myFunction: () => {},
  options: ActionWithFeedbackOptions
) => {
  if (options.showLoadingSpinner) {
    // Show loading spinner
  }

  try {
    const response = await myFunction();
    if (options.successMessage) {
      // Show success message
    }
    return response;
  } catch (error) {
    if (options.errorMessage) {
      // Show error message
    } else {
      // Show default error message
    }

    if (options.callback) {
      options.callback();
    }
  } finally {
    if (options.showLoadingSpinner) {
      // Hide loading spinner
    }
  }
};

export interface ActionWithFeedbackOptions {
  errorMessage?: string;
  successMessage?: string;
  showLoadingSpinner?: boolean;
  callback?: () => any;
}
