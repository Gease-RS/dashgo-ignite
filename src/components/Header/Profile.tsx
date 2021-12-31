import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gease Oliveira da Rosa</Text>
          <Text color="gray.300" fontSize="small">
            gease@gease.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gease Oliveira da Rosa"
        src="https://github.com/gease-rs.png"
      />
    </Flex>
  );
}
