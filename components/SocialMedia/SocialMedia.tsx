import { ActionIcon, Container, Stack, Text } from "@mantine/core";
import {
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  BrandYoutube,
  Mail,
} from "tabler-icons-react";
import { useSocialMediaStyles } from "./useSocialMediaStyles";

export function SocialMedia() {
  const { classes, theme } = useSocialMediaStyles();

  return (
    <Container>
      <Stack className={classes.socialMediaIcons}>
        <ActionIcon
          variant="subtle"
          component="a"
          target="_blank"
          href="https://www.youtube.com/@hoomanyarahmadi/"
        >
          <BrandYoutube size="1rem" />
        </ActionIcon>

        <ActionIcon
          variant="subtle"
          component="a"
          target="_blank"
          href="https://github.com/HoomanDevp/"
        >
          <BrandGithub size="1rem" />
        </ActionIcon>

        <ActionIcon
          variant="subtle"
          component="a"
          target="_blank"
          href="https://www.linkedin.com/in/hooman-yarahmadi/"
        >
          <BrandLinkedin size="1rem" />
        </ActionIcon>

        <ActionIcon
          variant="subtle"
          component="a"
          target="_blank"
          href="https://twitter.com/hdevl0per/"
        >
          <BrandTwitter size="1rem" />
        </ActionIcon>

        <ActionIcon
          variant="subtle"
          component="a"
          href="mailto:hoomanyarahmadi72@gamil.com"
        >
          <Mail size="1rem" />
        </ActionIcon>

        <Text className={classes.lineLeft}></Text>
      </Stack>

      <Stack className={classes.right}>
        <Text c="dimmed" className={classes.verticalText}>
          hoomanyarahmadi72@gmail.com
        </Text>
        <Text className={classes.lineRight}></Text>
      </Stack>
    </Container>
  );
}
