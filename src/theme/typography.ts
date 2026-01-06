import { Theme, Typography } from "./theme";

export const createTypography = (theme: Theme): Typography => ({
  h6: {
    fontSize: 22,
    fontWeight: 600,
    color: theme.colors.text,
    fontFamily: theme.fonts.sans,
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    lineHeight: 32,
    color: theme.colors.text,
    fontFamily: theme.fonts.sans,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 600,
    color: theme.colors.text,
  },

  body: {
    fontSize: theme.fontSizes.sm,
    lineHeight: 24,
    color: theme.colors.text,
  },

  bodySemiBold: {
    fontSize: theme.fontSizes.sm,
    lineHeight: 24,
    fontWeight: 600,
    color: theme.colors.text,
  },

  link: {
    fontSize: 16,
    lineHeight: 30,
    color: theme.colors.accent,
    fontWeight: 400,
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    color: theme.colors.text,
    fontWeight: 400,
  },
});
